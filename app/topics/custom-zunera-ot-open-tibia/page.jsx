import CustomZuneraOtOpenTibiaKeywordPage, { generateMetadata } from './custom-zunera-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZuneraOtOpenTibiaKeywordPage />;
}
