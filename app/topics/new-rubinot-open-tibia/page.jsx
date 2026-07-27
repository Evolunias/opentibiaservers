import NewRubinotOpenTibiaKeywordPage, { generateMetadata } from './new-rubinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotOpenTibiaKeywordPage />;
}
