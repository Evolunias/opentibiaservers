import LumineraPvpeServerArgentinaKeywordPage, { generateMetadata } from './luminera-pvpe-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraPvpeServerArgentinaKeywordPage />;
}
