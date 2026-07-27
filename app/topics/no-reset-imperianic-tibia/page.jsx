import NoResetImperianicTibiaKeywordPage, { generateMetadata } from './no-reset-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetImperianicTibiaKeywordPage />;
}
