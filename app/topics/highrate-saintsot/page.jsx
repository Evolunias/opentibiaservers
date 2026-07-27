import HighrateSaintsotKeywordPage, { generateMetadata } from './highrate-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotKeywordPage />;
}
