import CustomMadnessaliveTibiaKeywordPage, { generateMetadata } from './custom-madnessalive-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMadnessaliveTibiaKeywordPage />;
}
