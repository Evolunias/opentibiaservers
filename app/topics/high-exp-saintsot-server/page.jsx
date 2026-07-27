import HighExpSaintsotServerKeywordPage, { generateMetadata } from './high-exp-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpSaintsotServerKeywordPage />;
}
