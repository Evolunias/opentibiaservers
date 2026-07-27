import CustomZuneraOtOtServerKeywordPage, { generateMetadata } from './custom-zunera-ot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZuneraOtOtServerKeywordPage />;
}
