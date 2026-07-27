import ActiveElderaTibiaKeywordPage, { generateMetadata } from './active-eldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaTibiaKeywordPage />;
}
