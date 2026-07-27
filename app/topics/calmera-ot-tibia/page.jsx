import CalmeraOtTibiaKeywordPage, { generateMetadata } from './calmera-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtTibiaKeywordPage />;
}
