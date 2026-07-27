import TopZuneraOtTibiaKeywordPage, { generateMetadata } from './top-zunera-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZuneraOtTibiaKeywordPage />;
}
