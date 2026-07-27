import AldoraWarsKeywordPage, { generateMetadata } from './aldora-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraWarsKeywordPage />;
}
