import SabrehavenWarsKeywordPage, { generateMetadata } from './sabrehaven-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenWarsKeywordPage />;
}
