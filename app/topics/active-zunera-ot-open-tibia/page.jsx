import ActiveZuneraOtOpenTibiaKeywordPage, { generateMetadata } from './active-zunera-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveZuneraOtOpenTibiaKeywordPage />;
}
