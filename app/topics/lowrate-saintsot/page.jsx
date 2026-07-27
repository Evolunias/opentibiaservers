import LowrateSaintsotKeywordPage, { generateMetadata } from './lowrate-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSaintsotKeywordPage />;
}
