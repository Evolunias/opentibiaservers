import ActiveMadnessaliveTibiaKeywordPage, { generateMetadata } from './active-madnessalive-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMadnessaliveTibiaKeywordPage />;
}
