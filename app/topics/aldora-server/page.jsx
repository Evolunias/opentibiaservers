import AldoraServerKeywordPage, { generateMetadata } from './aldora-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraServerKeywordPage />;
}
