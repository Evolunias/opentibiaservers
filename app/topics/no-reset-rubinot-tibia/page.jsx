import NoResetRubinotTibiaKeywordPage, { generateMetadata } from './no-reset-rubinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotTibiaKeywordPage />;
}
