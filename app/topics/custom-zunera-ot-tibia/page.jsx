import CustomZuneraOtTibiaKeywordPage, { generateMetadata } from './custom-zunera-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZuneraOtTibiaKeywordPage />;
}
