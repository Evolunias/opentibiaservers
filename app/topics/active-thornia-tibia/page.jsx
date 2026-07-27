import ActiveThorniaTibiaKeywordPage, { generateMetadata } from './active-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaTibiaKeywordPage />;
}
