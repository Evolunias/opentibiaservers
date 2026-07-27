import OfficialElderaOtServerKeywordPage, { generateMetadata } from './official-eldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialElderaOtServerKeywordPage />;
}
