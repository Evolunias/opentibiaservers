import SoleraWarsKeywordPage, { generateMetadata } from './solera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraWarsKeywordPage />;
}
