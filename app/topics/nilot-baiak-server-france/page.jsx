import NilotBaiakServerFranceKeywordPage, { generateMetadata } from './nilot-baiak-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotBaiakServerFranceKeywordPage />;
}
