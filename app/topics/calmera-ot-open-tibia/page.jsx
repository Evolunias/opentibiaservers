import CalmeraOtOpenTibiaKeywordPage, { generateMetadata } from './calmera-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtOpenTibiaKeywordPage />;
}
