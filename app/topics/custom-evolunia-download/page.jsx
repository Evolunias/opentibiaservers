import CustomEvoluniaDownloadKeywordPage, { generateMetadata } from './custom-evolunia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaDownloadKeywordPage />;
}
