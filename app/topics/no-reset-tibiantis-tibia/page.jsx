import NoResetTibiantisTibiaKeywordPage, { generateMetadata } from './no-reset-tibiantis-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiantisTibiaKeywordPage />;
}
