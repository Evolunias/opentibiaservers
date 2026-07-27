import NovaWarsKeywordPage, { generateMetadata } from './nova-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaWarsKeywordPage />;
}
