import OfficialRealeraTibiaKeywordPage, { generateMetadata } from './official-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraTibiaKeywordPage />;
}
