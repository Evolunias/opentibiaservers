import FreshStartRealeraTibiaKeywordPage, { generateMetadata } from './fresh-start-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRealeraTibiaKeywordPage />;
}
