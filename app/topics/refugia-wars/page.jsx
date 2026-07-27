import RefugiaWarsKeywordPage, { generateMetadata } from './refugia-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RefugiaWarsKeywordPage />;
}
