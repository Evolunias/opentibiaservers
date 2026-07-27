import NilotPvpeKeywordPage, { generateMetadata } from './nilot-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotPvpeKeywordPage />;
}
