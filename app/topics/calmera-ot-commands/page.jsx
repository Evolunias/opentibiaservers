import CalmeraOtCommandsKeywordPage, { generateMetadata } from './calmera-ot-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtCommandsKeywordPage />;
}
