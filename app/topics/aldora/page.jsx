import AldoraKeywordPage, { generateMetadata } from './aldora';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraKeywordPage />;
}
