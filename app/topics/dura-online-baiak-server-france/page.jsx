import DuraOnlineBaiakServerFranceKeywordPage, { generateMetadata } from './dura-online-baiak-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineBaiakServerFranceKeywordPage />;
}
