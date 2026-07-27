import LowrateSaintsotLoginKeywordPage, { generateMetadata } from './lowrate-saintsot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSaintsotLoginKeywordPage />;
}
