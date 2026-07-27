import CustomZuneraOtOtKeywordPage, { generateMetadata } from './custom-zunera-ot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZuneraOtOtKeywordPage />;
}
