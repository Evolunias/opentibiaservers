import NoResetNtoStarTibiaKeywordPage, { generateMetadata } from './no-reset-nto-star-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNtoStarTibiaKeywordPage />;
}
