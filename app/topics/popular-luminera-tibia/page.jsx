import PopularLumineraTibiaKeywordPage, { generateMetadata } from './popular-luminera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraTibiaKeywordPage />;
}
