import BestMediviaOpenTibiaKeywordPage, { generateMetadata } from './best-medivia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaOpenTibiaKeywordPage />;
}
