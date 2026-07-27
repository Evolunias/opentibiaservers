import EternalOdysseyRegisterKeywordPage, { generateMetadata } from './eternal-odyssey-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyRegisterKeywordPage />;
}
