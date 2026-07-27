import PopularRealeraTibiaKeywordPage, { generateMetadata } from './popular-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraTibiaKeywordPage />;
}
