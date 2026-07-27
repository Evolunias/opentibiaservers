import MadnessaliveRegisterKeywordPage, { generateMetadata } from './madnessalive-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveRegisterKeywordPage />;
}
