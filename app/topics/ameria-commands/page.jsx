import AmeriaCommandsKeywordPage, { generateMetadata } from './ameria-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaCommandsKeywordPage />;
}
