import CurrentSaintsotOtServerKeywordPage, { generateMetadata } from './current-saintsot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotOtServerKeywordPage />;
}
