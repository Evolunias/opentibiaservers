import ActiveTibiantisTibiaKeywordPage, { generateMetadata } from './active-tibiantis-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisTibiaKeywordPage />;
}
