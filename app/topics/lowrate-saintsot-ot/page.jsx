import LowrateSaintsotOtKeywordPage, { generateMetadata } from './lowrate-saintsot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSaintsotOtKeywordPage />;
}
