import EternalOdysseyCommandsKeywordPage, { generateMetadata } from './eternal-odyssey-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyCommandsKeywordPage />;
}
