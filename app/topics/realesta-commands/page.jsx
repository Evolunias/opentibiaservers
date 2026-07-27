import RealestaCommandsKeywordPage, { generateMetadata } from './realesta-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaCommandsKeywordPage />;
}
