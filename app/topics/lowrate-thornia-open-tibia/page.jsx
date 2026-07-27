import LowrateThorniaOpenTibiaKeywordPage, { generateMetadata } from './lowrate-thornia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaOpenTibiaKeywordPage />;
}
