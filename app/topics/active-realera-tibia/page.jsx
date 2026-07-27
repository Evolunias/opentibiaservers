import ActiveRealeraTibiaKeywordPage, { generateMetadata } from './active-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealeraTibiaKeywordPage />;
}
