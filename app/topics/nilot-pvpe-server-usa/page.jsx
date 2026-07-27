import NilotPvpeServerUsaKeywordPage, { generateMetadata } from './nilot-pvpe-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotPvpeServerUsaKeywordPage />;
}
