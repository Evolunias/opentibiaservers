import AmeraWarsKeywordPage, { generateMetadata } from './amera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeraWarsKeywordPage />;
}
