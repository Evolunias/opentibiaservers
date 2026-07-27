import Unline12WithTrainersServerKeywordPage, { generateMetadata } from './unline-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline12WithTrainersServerKeywordPage />;
}
